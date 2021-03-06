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
var filteredBlogPosts = [];

var unselectedTags = [];
var selectedTags = [];

window.onload = function() {
    populateBlogPosts();
    filterBlogPosts();
    renderFilteredBlogPosts();
    
    populateTagFilters();
    renderUnselectedTags();
    renderSelectedTags();
}

function populateBlogPosts() {
    var blogPost = new BlogPost();
    blogPost.title = "1 Hello World";
    blogPost.date = Date.parse("7/22/2018");
    blogPost.text = "My first web app. Welcome to the website!";
    blogPost.tags = [
        "Coding", 
    ];
    blogPosts.push(blogPost);
    
    var blogPost2 = new BlogPost();
    blogPost2.title = "2 First Day of Junior Year";
    blogPost2.date = Date.parse("8/13/2018");
    blogPost2.text = "First day of school";
    blogPost2.tags = [
        "School",
    ];
    blogPosts.push(blogPost2);
    
    
    var blogPost3 = new BlogPost();
    blogPost3.title = "3 Halfway!";
    blogPost3.date = Date.parse("12/21/2018");
    blogPost3.text = "Start of Winter Break, got to see the Lakers vs Warriors on Christmas Day.";
    blogPost3.tags = [
        "Sports", 
        "School",
        "Events",
    ];
    blogPosts.push(blogPost3);
    
    var blogPost3 = new BlogPost();
    blogPost3.title = "4 New Year";
    blogPost3.date = Date.parse("1/1/2019");
    blogPost3.text = "Start of the new year and school semester!";
    blogPost3.tags = [
        "Events", 
        "School",
    ];
    blogPosts.push(blogPost3);
    
    var blogPost3 = new BlogPost();
    blogPost3.title = "5 Birthday";
    blogPost3.date = Date.parse("2/16/2019");
    blogPost3.text = "17th birthday with a 4 day weekend! Got to spend time with friends & family.";
    blogPost3.tags = [
        "Events", 
        "School",
    ];
    blogPosts.push(blogPost3);
    
    var blogPost3 = new BlogPost();
    blogPost3.title = "6 End of School Year";
    blogPost3.date = Date.parse("5/15/19");
    blogPost3.text = "Finished my 5 AP Tests and now only have finals to go.";
    blogPost3.tags = [
        "School",
    ];
    blogPosts.push(blogPost3);
    
    var blogPost3 = new BlogPost();
    blogPost3.title = "7 Last Day of School";
    blogPost3.date = Date.parse("5/31/2019");
    blogPost3.text = "Junior year is over and I got a 4.3 GPA this semester, while also painting my calipers red and painting my tire letters white over the last few weeks.";
    blogPost3.tags = [
        "School",
        "Events",
    ];
    blogPosts.push(blogPost3);
    
    var blogPost3 = new BlogPost();
    blogPost3.title = "8 Return to Code";
    blogPost3.date = Date.parse("6/1/2019");
    blogPost3.text = "Back to working on this website while watching the Raptors take Game 1 of the finals.";
    blogPost3.tags = [
        "Coding",
        "Events",
    ];
    blogPosts.push(blogPost3);
    
    var blogPost3 = new BlogPost();
    blogPost3.title = "9 Continuation";
    blogPost3.date = Date.parse("6/4/2019");
    blogPost3.text = "Took a day two break from working on the website, but back to it! Added the Photos page and gallery, although not finished, is coming along after a lot of troubleshooting. Beginning to plan out the Interests page..";
    blogPost3.tags = [
        "Coding",
    ];
    blogPosts.push(blogPost3);
    
    var blogPost3 = new BlogPost();
    blogPost3.title = "10 Interests Page";
    blogPost3.date = Date.parse("6/9/2019");
    blogPost3.text = "During the last five days, I got to see the Raptors take a 3-1 lead against the Warriors before they play tomorrow in Toronto. Today, I started developing the interests page of the website using flipping cards to display hobbies/interests.";
    blogPost3.tags = [
        "Coding",
        "Sports",
    ];
    blogPosts.push(blogPost3);
}
function filterBlogPosts() {
    if (selectedTags.length == 0) {
        filteredBlogPosts = blogPosts;
    } else {
        filteredBlogPosts = [];
        for (var i = 0; i < blogPosts.length; i++) {
            var blogPost = blogPosts[i];

            for (var x = 0; x < blogPost.tags.length; x++) {
                var tag = blogPost.tags[x];
                if (selectedTags.includes(tag)) {
                    filteredBlogPosts.push(blogPost);
                }     
            }
        }
    }
}
function renderFilteredBlogPosts() {
    var blogPostList = document.getElementById("blogPostList");
    
    blogPostList.innerHTML = "";
    
    for (var i = 0; i < filteredBlogPosts.length; i++) {
        var blogPost = filteredBlogPosts[i];
        
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
    
    filterBlogPosts();
    renderFilteredBlogPosts();
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
    
    filterBlogPosts();
    renderFilteredBlogPosts();
}

//<label class="tag unselectedTag" onclick="clickedTag()">sports</label>
