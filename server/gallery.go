package main

import (
  "fmt"
  "encoding/json"
  // "os"
  // "io"
  // "log"
  "net/http"
  //"strings"
  // "encoding/json"
  "io/ioutil"
  // "database/sql"
  // _ "github.com/go-sql-driver/mysql"
  // "golang.org/x/crypto/bcrypt"
  // "github.com/gorilla/sessions"   
)

func handleGalleryPost (w http.ResponseWriter, r *http.Request, db *sql.DB) {
  // body, err := ioutil.ReadAll(r.Body)
  // if err != nil {
  //   panic(err)
  // }

  // dataBody :=  string(body)


  body, err := ioutil.ReadAll(r.Body)
  if err != nil {
    panic(err)
  }
  //fmt.Println(string(body))
  
  //parse the JSON string body to map dat (its like object)
  byt := body
  var dat map[string]interface{}
  if err := json.Unmarshal(byt, &dat); err != nil {
    panic(err)
  }
  fmt.Println("body should be: ", dat["title"])  //at this point, user input appears here ok.

  // Todo: check DB, insert into DB, create path on server

    //variable(s) to hold the returned values from the query
  var photo_filepath string
  err = db.QueryRow("select * from users where user_name = ?", username).Scan(&photo_filepath)



  fmt.Println("Inside handleGallery -- ")

}



