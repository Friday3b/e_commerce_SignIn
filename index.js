

// kodun domdan sonra ishlemesi ucun ready den istifade edirik 
$(document).ready ( () => {

    $("#btn").click( () => {
        const email1 = $("#email").val();
        const password1 = $("#password").val();

        signInRequest(email1 , password1);
    })


})


// get request to back 
const signInRequest = async (email1, password1) => {
try{ 

    const response = await fetch("http://localhost:3000/api/auth/login", {
        method:"POST",
        body: JSON.stringify({email: email1 , password:password1}),
        headers: {
            "Accept" : "application/json",
            "Content-Type" : "application/json"
            
        }
        
    });

    if(!response.ok){
        throw new Error(`Response not OK`);
    }
    
    
    const data = await response.json();
    console.log(data);

} catch(error){
    console.error(`error request happened : ` , error) ;

}};




