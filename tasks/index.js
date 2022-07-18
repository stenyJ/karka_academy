function dataFromBackend(){
   var http=new XMLHttpRequest();
   http.open('GET','http://jsonplaceholder.typicode.com/todos',true);
   http.send();
}
dataFromBackend()