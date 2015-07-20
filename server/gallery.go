package main

import (
  "fmt"
  "encoding/json"
  "os"
  // "io"
  "log"
  "net/http"
  //"strings"
  // "encoding/json"
  "io/ioutil"
  "database/sql"
  _ "github.com/go-sql-driver/mysql"
  // "golang.org/x/crypto/bcrypt"
  // "github.com/gorilla/sessions"   
)

func handleGalleryPost (w http.ResponseWriter, r *http.Request, db *sql.DB) {
  body, err := ioutil.ReadAll(r.Body)
  if err != nil {
    panic(err)
  }
  
  //parse the JSON string body to map dat (its like object)
  byt := body
  var dat map[string]interface{}
  if err := json.Unmarshal(byt, &dat); err != nil {
    panic(err)
  }
  fmt.Println("User upload info: ", dat)  
  upload_filename := dat["title"].(string)   //at this point, user input appears here ok.
  upload_filepath := "../database/"
  upload_uid := 1
  upload_fileall := upload_filepath + upload_filename

  // ###   Todo: check DB, insert into DB, create path on server  ###
  // 1) Check DB and Insert into DB
    //variable(s) to hold the returned values from the query
  var (
    // photo_filepath string
    photo_filename string
  )
  err = db.QueryRow("select * from users where user_name = ?", upload_filename).Scan(&photo_filename)
  switch {
    //if username doesn't exist
    case err == sql.ErrNoRows:
      //add username, password, firstname, and lastname to database
      stmt, err := db.Prepare("insert into user_uploads (uid, file_name, file_path) values (?, ?, ?)")
      if err != nil {
        log.Fatal(err)
      }
      res, err := stmt.Exec(upload_uid, upload_filename, upload_filepath)
      if err != nil {
        log.Fatal(err)
      }
      lastId, err := res.LastInsertId()
      if err != nil {
        log.Fatal(err)
      }
      rowCnt, err := res.RowsAffected()
      if err != nil {
        log.Fatal(err)
      }
      fmt.Printf("Inserted XXX into database. Last inserted ID = %d, rows affected = %d\n", lastId, rowCnt)
  }

  // 2) Check file path and make/save file

  // check database dir
  if _, err := os.Stat(upload_filepath); os.IsNotExist(err) {
    fmt.Println("Filepath doesn't exist", upload_filepath) // File Path not exist. Needs to create
  }
  // check file exist
  if _, err := os.Stat(upload_fileall); os.IsNotExist(err) {
    fmt.Println("filename doesn't exist, ", upload_fileall)  //file doesn't exist;  Make one
    err = ioutil.WriteFile(upload_fileall, []byte("123"), 0644)
    if err != nil {
        panic(err)
    }
  } else {
    // file exist, do something????    
  }


  fmt.Println("Inside handleGallery -- ")
}



