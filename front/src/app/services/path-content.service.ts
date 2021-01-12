import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PathContentService {

    content: any = {};

    constructor(private http: HttpClient ) {}

    getContent(dirPath: string) {
        let baseURL = 'http://192.168.0.15:5000/api/dir';
        let url = baseURL + dirPath;
        return this.http.get(url);
    }
} 