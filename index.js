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

var unselectedTags = [];
var selectedTags = [];

window.onload = function() {
    populateBlogPosts();
    renderBlogPosts();
    
    populateTagFilters();
    renderUnselectedTags();
    renderSelectedTags();
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
    
    var blogPost2 = new BlogPost();
    blogPost2.title = "First Day of School";
    blogPost2.date = Date.parse("7/22/2018");
    blogPost2.text = "I'm Sami, I'm currently 16 years old and enrolled at Folsom High School. I am very interested in basketball, more specifically the NBA, and enjoy playing video games such as Fortnite, 2K, PUBG, and much more.";
    blogPost2.tags = [
        "sports", 
        "school",
        "games",
    ];
    blogPosts.push(blogPost2);
    
    
    var blogPost3 = new BlogPost();
    blogPost3.title = "First Day of School";
    blogPost3.date = Date.parse("7/22/2018");
    blogPost3.text = "I'm Sami, I'm currently 16 years old and enrolled at Folsom High School. I am very interested in basketball, more specifically the NBA, and enjoy playing video games such as Fortnite, 2K, PUBG, and much more.";
    blogPost3.tags = [
        "sports", 
        "school",
        "games",
    ];
    blogPosts.push(blogPost3);
    
    var blogPost3 = new BlogPost();
    blogPost3.title = "First Day of School";
    blogPost3.date = Date.parse("7/22/2018");
    blogPost3.text = "I'm Sami, I'm currently 16 years old and enrolled at Folsom High School. I am very interested in basketball, more specifically the NBA, and enjoy playing video games such as Fortnite, 2K, PUBG, and much more.";
    blogPost3.tags = [
        "sports", 
        "school",
        "games",
    ];
    blogPosts.push(blogPost3);
    
    var blogPost3 = new BlogPost();
    blogPost3.title = "First Day of School";
    blogPost3.date = Date.parse("7/22/2018");
    blogPost3.text = "I'm Sami, I'm currently 16 years old and enrolled at Folsom High School. I am very interested in basketball, more specifically the NBA, and enjoy playing video games such as Fortnite, 2K, PUBG, and much more.";
    blogPost3.tags = [
        "sports", 
        "school",
        "games",
    ];
    blogPosts.push(blogPost3);
    
    var blogPost3 = new BlogPost();
    blogPost3.title = "First Day of School";
    blogPost3.date = Date.parse("7/22/2018");
    blogPost3.text = "I'm Sami, I'm currently 16 years old and enrolled at Folsom High School. I am very interested in basketball, more specifically the NBA, and enjoy playing video games such as Fortnite, 2K, PUBG, and much more.";
    blogPost3.tags = [
        "sports", 
        "school",
        "games",
    ];
    blogPosts.push(blogPost3);
    
    var blogPost3 = new BlogPost();
    blogPost3.title = "First Day of School";
    blogPost3.date = Date.parse("7/22/2018");
    blogPost3.text = "I'm Sami, I'm currently 16 years old and enrolled at Folsom High School. I am very interested in basketball, more specifically the NBA, and enjoy playing video games such as Fortnite, 2K, PUBG, and much more.";
    blogPost3.tags = [
        "sports", 
        "school",
        "games",
    ];
    blogPosts.push(blogPost3);
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
        
        for (var x = 0; x < blogPost.tags.length; x++) {
            var tag = blogPost.tags[x];
            
            var tagLabel = document.createElement("label");
            tagLabel.setAttribute("class", "tag selectedTag");
            tagLabel.innerHTML = tag;
            
            tagDiv.appendChild(tagLabel);
        }

        blogPostList.appendChild(blogPostLi);
    }    
}

function populateTagFilters() {
    for (var i = 0; i < blogPosts.length; i++) {
        var blogPost = blogPosts[i];
        
        for (var x = 0; x < blogPost.tags.length; x++) {
            var tag = blogPost.tags[x];
            if (!unselectedTags.includes(tag)) {
                unselectedTags.push(tag);
            }
        }
    }
}

function renderUnselectedTags() {
    var unselectedTagLabel = document.getElementById("unselectedTagLabel");

    if (unselectedTags.length == 0) {
        unselectedTagLabel.style.display = "none";
    } else {
        unselectedTagLabel.style.display = "inline";
    }
    
    var unselectedTagsDiv = document.getElementById("unselectedTagsDiv");
    
    for (var i = 0; i < unselectedTags.length; i++) {
        var unselectedTag = unselectedTags[i];
        
        var unselectedTagLabel = document.createElement("label");
        unselectedTagLabel.setAttribute("class", "tag unselectedTag");
        unselectedTagLabel.setAttribute("onclick", "didSelectTag(\"" + unselectedTag + "\")");
        unselectedTagLabel.innerHTML = unselectedTag;
        unselectedTagsDiv.appendChild(unselectedTagLabel);
    }
}
function renderSelectedTags() {
    var selectedTagLabel = document.getElementById("selectedTagLabel");

    if (selectedTags.length == 0) {
        selectedTagLabel.style.display = "none";
    } else {
        selectedTagLabel.style.display = "inline";
    }
    
    var selectedTagsDiv = document.getElementById("selectedTagsDiv");
    
    for (var i = 0; i < selectedTags.length; i++) {
        var selectedTag = selectedTags[i];
        
        var selectedTagLabel = document.createElement("label");
        selectedTagLabel.setAttribute("class", "tag selectedTag");
        selectedTagLabel.setAttribute("onclick", "didUnselectTag(\"" + selectedTag + "\")");
        selectedTagLabel.innerHTML = selectedTag;
        selectedTagsDiv.appendChild(selectedTagLabel);
    }
}

function didSelectTag(tag) {
    //unselected
    var index = unselectedTags.indexOf(tag);
    unselectedTags.splice(index, 1);
    
    var unselectedTagsDiv = document.getElementById("unselectedTagsDiv");
    unselectedTagsDiv.innerHTML = "";
    
    renderUnselectedTags();
    
    //selected
    selectedTags.push(tag);

    var selectedTagsDiv = document.getElementById("selectedTagsDiv");
    selectedTagsDiv.innerHTML = "";
    
    renderSelectedTags();
}
function didUnselectTag(tag) {
    //selected
    var index = selectedTags.indexOf(tag);
    selectedTags.splice(index, 1);
    
    var selectedTagsDiv = document.getElementById("selectedTagsDiv");
    selectedTagsDiv.innerHTML = "";
    
    renderSelectedTags();
    
    //unselected
    unselectedTags.push(tag);

    var unselectedTagsDiv = document.getElementById("unselectedTagsDiv");
    unselectedTagsDiv.innerHTML = "";
    
    renderUnselectedTags();
}

//<label class="tag unselectedTag" onclick="clickedTag()">sports</label>
