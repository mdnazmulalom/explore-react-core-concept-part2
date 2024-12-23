export default function Friend({friend}){
    // console.log(friend);

    const{name,id, email} =friend;
 return(
    <div className="box" >
        <h4>Name:{name} </h4>
        <h4>Id: {id} </h4>
        <p>Email: {email} </p>
    </div>
 )
}