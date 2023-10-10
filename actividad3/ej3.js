
function prepare() {
    let row=document.createElement("div");
    row.classList.add("row")
    imgs1.forEach(element => {
        let col=document.createElement("div");
        col.classList.add("col");
        let img=document.createElement("img");
        img.src=element;
        img.width=100;
        img.addEventListener("click",()=>{
            imgs2.push(imgs1.splice(img.src,1));
            console.log(img.src);
            row2.append(col);
        });
        col.append(img);
        row.append(col);
    });
    let row2=document.createElement("div");
    row2.classList.add("row")
    document.querySelector("body").append(row,row2);
}
//lista de imgs
let imgs1=[
"https://cdn.pixabay.com/photo/2015/04/10/01/41/fox-715588_960_720.jpg",
"https://cdn.pixabay.com/photo/2014/08/29/03/02/horses-430441_960_720.jpg",
"https://cdn.pixabay.com/photo/2017/07/25/01/22/cat-2536662_960_720.jpg",
"https://cdn.pixabay.com/photo/2017/01/16/19/54/ireland-1985088_640.jpg",
"https://cdn.pixabay.com/photo/2014/11/03/17/40/leopard-515509_640.jpg",
"https://cdn.pixabay.com/photo/2012/06/19/10/32/owl-50267_640.jpg",
"https://cdn.pixabay.com/photo/2016/11/14/04/45/elephant-1822636_640.jpg",
"https://cdn.pixabay.com/photo/2017/01/14/12/59/iceland-1979445_640.jpg"]
let imgs2=[];
prepare()