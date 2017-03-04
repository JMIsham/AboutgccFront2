/**
 * Created by Isham on 3/4/2017.
 */
export async function login(username,password){
    console.log("called!!");
    const url = "http://aboutgcc.com/aboutgcc/web/login";
    const request = {
        method: "POST",
        mode: "cors",
        headers:{
            'Content-Type': 'application/json'
                },
        body :JSON.stringify({
            username,
            password
            })
    };
    const response = await fetch(url,request);
    console.log(response);
}