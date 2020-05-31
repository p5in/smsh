import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

export interface Student {
  id: string;
  name: string;
  address: string;
  phone: string;
}

@Injectable({
  providedIn: "root",
})
export class StudentService {
  private url = "https://sfor.space/praveen/api/crud-api/api/students";

  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<[Student]>(this.url);
  }
  get(id: string) {
    return this.http.get<Student>(this.url + "/" + id);
  }
  create(student: Student) {
    return this.http.post(this.url, student);
  }
  update(student: Student, id: string) {
    return this.http.put<Student>(this.url + "/" + id, student);
  }

  remove(id: string) {
    return this.http.delete(this.url + "/" + id);
  }
}
