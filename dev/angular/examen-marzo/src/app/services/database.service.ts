import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';

//ENDPOINTS
const GRUPOSURL="http://localhost:3000/grupos"
const EQUIPOSURL="http://localhost:3000/equipos"
const USUARIOSURL="http://localhost:3000/usuarios"

const HTTPOPTIONS = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(private http:HttpClient) { 
  }

  //Métodos (incluir tipos correctos en los argumentos)
  getGrupos():Observable<Object>{
    return this.http.get(GRUPOSURL);
  }

  getEquipos():Observable<Object>{
    return this.http.get(EQUIPOSURL);
  }

  getEquiposGrupo(g:any):Observable<Object>{
    return this.http.get(EQUIPOSURL+"?grupo="+g)
  }

  getUsuario(id:any):Observable<Object>{
    return this.http.get(USUARIOSURL+"?id="+id);
  }

  getUsuarios():Observable<Object>{
    return this.http.get(USUARIOSURL);
  }

  getUsuariosEquipo(e:any):Observable<Object>{
    return this.http.get(USUARIOSURL+"?equipo="+e)
  }

  crearUsuario(u:any):Observable<Object>{
    return this.http.post<Usuario>(USUARIOSURL,u,HTTPOPTIONS)
  }

  actualizarUsuario(u:any):Observable<Object>{
    const url = `${USUARIOSURL}/${u.id}`;
    return this.http.put<Usuario>(url, u, HTTPOPTIONS);
  }

   deleteUsuario(u:any):Observable<any>{
    const url = `${USUARIOSURL}/${u}`
    return this.http.delete(url, HTTPOPTIONS)
      .pipe(catchError(this.handleError));
   }
   private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
}

//INTERFACES
export interface Grupo {
  id: number,
  nombre: string
}

export interface Equipo {
  id: number,
  nombre: string,
  presupuesto: number,
  grupo: number 
}

export interface Usuario {
  id: number,
  nombre: string,
  passwd: string,
  equipo: number
}