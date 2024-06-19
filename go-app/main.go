package main

import (
	"fmt"
	"html/template"
	"log"
	"net/http"
)

func main() {
	tpl := template.Must(template.New("").ParseFiles("app.tpl"))
	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		data := make([]string, 1000)
			for i := 0; i < 1000; i++ {
			data[i] = "ほげ"
		}
		fmt.Fprintln(w, "<html><body><ul>")
		err := tpl.ExecuteTemplate(w, "index", data)
		if err != nil {
			log.Println(err)
			http.Error(w, err.Error(), http.StatusInternalServerError)
			return
		}
		fmt.Fprintln(w, "</ul></body></html>")
	})
	http.ListenAndServe(":8081", nil)
}
