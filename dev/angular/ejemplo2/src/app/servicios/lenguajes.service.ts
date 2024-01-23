import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LenguajesService {
  private _lenguajes:Lenguaje[] = [
    {nombre: 'Java', imagen: 'java.png', descripcion: "Java es una plataforma informática de lenguaje de programación creada por Sun Microsystems en 1995. Ha evolucionado desde sus humildes comienzos hasta impulsar una gran parte del mundo digital actual, ya que es una plataforma fiable en la que se crean muchos servicios y aplicaciones."},
    {nombre: 'Javascript', imagen: 'js.png', descripcion: "JavaScript es un lenguaje de programación que los desarrolladores utilizan para hacer páginas web interactivas. Desde actualizar fuentes de redes sociales a mostrar animaciones y mapas interactivos, las funciones de JavaScript pueden mejorar la experiencia del usuario de un sitio web."},
    {nombre: 'C++', imagen: 'cpp.png', descripcion: "C++ es un lenguaje de programación diseñado en 1979 por Bjarne Stroustrup. La intención de su creación fue extender al lenguaje de programación C y añadir mecanismos que permiten la manipulación de objetos. En ese sentido, desde el punto de vista de los lenguajes orientados a objetos, C++ es un lenguaje híbrido."},
    {nombre: 'Python', imagen: 'python.png', descripcion: "Python es un lenguaje de programación ampliamente utilizado en las aplicaciones web, el desarrollo de software, la ciencia de datos y el machine learning (ML). Los desarrolladores utilizan Python porque es eficiente y fácil de aprender, además de que se puede ejecutar en muchas plataformas diferentes."},
    {nombre: 'Ruby', imagen: 'ror.png', descripcion: "Ruby es un lenguaje de programación dinámico y de código abierto. Entre sus características, vale subrayar la simplicidad y la eficiencia: permite hacer mucho con pocas líneas de código. Ruby se destaca por su sintaxis legible y su enfoque en la productividad del desarrollador."},
  ]
  constructor() { }
  getLenguajes():Lenguaje[]{return this._lenguajes}
  rutaImagen(archivo:string):string{return "assets/img/"+archivo;}
}
export interface Lenguaje{
  nombre:string;
  imagen:string;
  descripcion:string;
}