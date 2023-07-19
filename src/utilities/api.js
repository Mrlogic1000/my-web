
export async function getData(){
    const response = await fetch("https://localhost:5001/todoitems");
    if(!response.ok){
        throw {message:"Fail to catch data", status:500};

    }
    return response.json();
}