package main

import (
  "fmt"
  // "encoding/json"
  "os"
  "io"
  "log"
  "net/http"
  "math/rand"
  //"strings"
  // "encoding/json"
  // "io/ioutil"
  // "io"
  "database/sql"
  _ "github.com/go-sql-driver/mysql"
  // "golang.org/x/crypto/bcrypt"
  // "github.com/gorilla/sessions"
  // "time"
  // "crypto/md5"
  // "strconv"
  // "html/template"
  "time"
)


func randSeq(n int) string {
  rand.Seed(time.Now().UTC().UnixNano())
    var letters = []rune("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ")
    b := make([]rune, n)
    for i := range b {
        b[i] = letters[rand.Intn(len(letters))]
    }
    return string(b)
}

// func upload(w http.ResponseWriter, req *http.Request) {
//   file, handler, err := req.FormFile("fileTag") 
//   if err != nil { 
//           fmt.Println("erred, ", err) 
//   } 
//   data, err := ioutil.ReadAll(file) 
//   if err != nil { 
//           fmt.Println("erred, ", err) 
//   } 
//   err = ioutil.WriteFile(handler.Filename, data, 0777) 
//   if err != nil { 
//           fmt.Println("erred, ", err) 
//   } 
//     // fmt.Println("method:", r.Method)
//     // if r.Method == "GET" {
//     //     crutime := time.Now().Unix()
//     //     h := md5.New()
//     //     io.WriteString(h, strconv.FormatInt(crutime, 10))
//     //     token := fmt.Sprintf("%x", h.Sum(nil))

//     //     t, _ := template.ParseFiles("upload.gtpl")
//     //     t.Execute(w, token)
//     // } else {
//     //     fmt.Println("In upload function, Method:", r.Method)
//     //     r.ParseMultipartForm(32 << 20)
//     //     file, handler, err := r.FormFile("uploadfile")
//     //     if err != nil {
//     //         fmt.Println("Error: ", err)
//     //         return
//     //     }
//     //     defer file.Close()
//     //     fmt.Fprintf(w, "%v", handler.Header)
//     //     f, err := os.OpenFile("./test/"+handler.Filename, os.O_WRONLY|os.O_CREATE, 0666)
//     //     if err != nil {
//     //         fmt.Println("Error2: ", err)
//     //         return
//     //     }
//     //     defer f.Close()
//     //     io.Copy(f, file)
//     // }
// }


func saveToDb (filename string, db *sql.DB) {
  // body, err := ioutil.ReadAll(r.Body)
  // if err != nil {
  //   panic(err)
  // }
  
  // //parse the JSON string body to map dat (its like object)
  // byt := body
  // var dat map[string]interface{}
  // if err := json.Unmarshal(byt, &dat); err != nil {
  //   panic(err)
  // }
  // fmt.Println("User upload info: ", dat)  
  upload_filename := filename   //at this point, user input appears here ok.
  upload_filepath := "../database/"
  upload_uid := 1
  // upload_fileall := upload_filepath + upload_filename

  // ###   Todo: check DB, insert into DB, create path on server  ###
  // 1) Check DB and Insert into DB
    //variable(s) to hold the returned values from the query
  var (
    // photo_filepath string
    photo_filename string
  )
  err := db.QueryRow("select * from users where user_name = ?", filename).Scan(&photo_filename)
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

  // // 2) Check file path and make/save file

  // // check database dir
  // if _, err := os.Stat(upload_filepath); os.IsNotExist(err) {
  //   fmt.Println("Filepath doesn't exist", upload_filepath) // File Path not exist. Needs to create
  // }
  // // check file exist
  // if _, err := os.Stat(upload_fileall); os.IsNotExist(err) {
  //   if err != nil {
  //       panic(err)
  //   }

  //   fmt.Println("filename doesn't exist, ", upload_fileall)  //file doesn't exist;  Make one
  //   // upload(w,r)
  // } else {
  //   // file exist, do something????    
  // }

  fmt.Println("Finish saveToDb ")
  // upload(w, r)
}


func handleGalleryPost(w http.ResponseWriter, r *http.Request,  db *sql.DB) {
  //get the multipart reader for the request.
    fmt.Println("start upload...")

    var rand_filepath string

    reader, err := r.MultipartReader()

    if err != nil {
        http.Error(w, err.Error(), http.StatusInternalServerError)
        return
    }

    //copy each part to destination.
    for {
        part, err := reader.NextPart()
        if err == io.EOF {
            break
        }

        rand_filepath = randSeq(10) + "-" + part.FileName()


        //if part.FileName() is empty, skip this iteration.
        if part.FileName() == "" {
            continue
        }


        dst, err := os.Create("../database/" + rand_filepath)
        defer dst.Close()

        if err != nil {
            fmt.Println("erred", err)
            http.Error(w, err.Error(), http.StatusInternalServerError)
            return
        }

        if _, err := io.Copy(dst, part); err != nil {
            fmt.Println("erred", err)
            http.Error(w, err.Error(), http.StatusInternalServerError)
            return
        }
    }

    // writing file success, save to DB
    saveToDb(rand_filepath, db)
    fmt.Println("end upload!")

    http.Redirect(w, r, "#/gallery", 301)  // Need to Fix: Redirect because on clientside, form action redirect user to /galleryp. 
}









