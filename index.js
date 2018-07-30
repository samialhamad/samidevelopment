const preferredDateFormat = "MMMM DD, YYYY";

class BlogPost {
    constructor(blogPost) {
        if (blogPost) {
            this.title = blogPost.title;
            this.date = blogPost.date;
            this.text = blogPost.text;
            this.image = blogPost.image;
            this.video = blogPost.video;
            this.location = blogPost.location;
            this.tags = blogPost.tags;
        }
    }
}

var blogPosts = [];

window.onload = function() {
    populateBlogPosts();
    renderBlogPosts();
}

function populateBlogPosts() {
    var blogPost = new BlogPost();
    blogPost.title = "First Day of School";
    blogPost.date = Date.parse("7/22/2018");
    blogPost.text = "I'm Sami, I'm currently 16 years old and enrolled at Folsom High School. I am very interested in basketball, more specifically the NBA, and enjoy playing video games such as Fortnite, 2K, PUBG, and much more.";
    blogPost.tags = [
        "sports", 
        "school",
        "games",
    ];
    blogPosts.push(blogPost);
}

function renderBlogPosts() {
    var blogPostList = document.getElementById("blogPostList");
    
    for (var i = 0; i < blogPosts.length; i++) {
        var blogPost = blogPosts[i];
        
        var blogPostLi = document.createElement("li");
        blogPostLi.setAttribute("class", "card");

        var h2 = document.createElement("h2");
        h2.innerHTML = blogPost.title;
        blogPostLi.append(h2);
        
        var h3 = document.createElement("h3");
        h3.innerHTML = moment(blogPost.date).format(preferredDateFormat);
        blogPostLi.append(h3);
        
        var p = document.createElement("p");
        p.innerHTML = blogPost.text;
        blogPostLi.append(p);
        
        var tagDiv = document.createElement("div");
        tagDiv.setAttribute("class", "tagDiv");
        blogPostLi.append(tagDiv);
        
        for (var i = 0; i < blogPost.tags.length; i++) {
            var tag = blogPost.tags[i];
            
            var tagLabel = document.createElement("label");
            tagLabel.setAttribute("class", "tagLabel");
            tagLabel.innerHTML = tag;
            
            tagDiv.appendChild(tagLabel);
        }

        blogPostList.appendChild(blogPostLi);
    }    
}
