let movies=[

    {
        name:"LEO",
        rating:8.9
    },
    {
        name:"VIKRAM",
        rating:8.8
    },
    {
        name:"SIR",
        rating:8.8
    },
    {
        name:"TITANIC",
        rating:8.88
    },
    {
        name:"ADIPURUSH",
        rating:8.8
    },
    {
        name:"AVATAR 2.0",
        rating:8.8
    },
    {
        name:"AVENGERS",
        rating:8.7
    },
    {
        name:"RRR",
        rating:8.57
    },
    {
        name:"KGF",
        rating:8.6
    },
    {
        name:"KGF-2",
        rating:8.7
    },
    {
        name:"KGF-3",
        rating:"waiting"
    },
    {
        name:"Lion King",
        rating:"8.9"
    },
    {
        name:"BAHUBALI",
        rating:"9.0"
    },
    {
    name:"KGF CH-1",
    rating:8.6
    },
    {
    name:"KGF ch-2",
    rating:8.7
    },
    {
    name:"KGF ch-3",
    rating:"waiting"
    },
    {
    name:"Lion King 2",
    rating:"8.9"
    },
    {
    name:"BAHUBALI 2",
    rating:"9.0"
    }

]
// let fm=movies

function dm(data){

    document.getElementById("movies").innerHTML=""

    for(let i=0;i<data.length;i++){
        
        let mov=document.createElement("div")
        mov.classList.add("movie")
    
        let nam=document.createElement("h1")
        nam.innerText=data[i].name
    
        let r=document.createElement("p")
        r.innerText=data[i].rating
    
    
        mov.append(nam,r)
    
        document.getElementById("movies").appendChild(mov)  
    
    }

}
dm(movies)


//search logic

document.getElementById("search")
.addEventListener("keyup",function(){

    let val=document.getElementById("search").value 
    console.log(val)

    fm=movies.filter(function(movie){

        return movie.name.toLowerCase().includes(val.toLowerCase())
    
    })

    // console.log(fm)
    dm(fm)

})
