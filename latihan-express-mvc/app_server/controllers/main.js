//controller index
const index = (req, res) =>{
    res.render("index", {title: "Express MVC"});
}

//controller kontak
const kontak = (req, res)=>{
    res.render("kontak",{title: "Ini Halaman kontak"});

}
module,exports = {index, kontak};