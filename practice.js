const myLib = [];

function Book(coverImg, name, auth, page, stat){
    this.id = crypto.randomUUID();
    this.title = name;
    this.author = auth;
    this.pages = page;
    this.cover = this.coverImg;
    this.status = stat;

    this.changeStatus = function(){
        if (this.status === "Unread")
            this.status = "Read"
        else
            this.status = "Unread";
    }
};

function addBookToLibrary(coverImg, name, auth, page){
    
}