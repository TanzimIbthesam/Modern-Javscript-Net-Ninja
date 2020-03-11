const getTodos = (callback) =>{
    const request=new XMLHttpRequest();
    request.addEventListener('readystatechange',()=>{
     
        if(request.readyState === 4 && request.status === 200){
            // const data=JSON.parse(request.responseText);
     
            callback(undefined,request.responseText);
            
            
        }else if(request.readyState === 4){
               
                callback('Could not fetch data',undefined);
                
        }
    });
       
 request.open('GET','https://jsonplaceholder.typicode.com/todos/');
// request.open('GET','todos.json');

request.send();
   
};

getTodos((err,data)=>{
console.log('Callback Fired');
console.log(err,data);

if(err){
    console.log(err);
}else{
    console.log(data);
}
});







