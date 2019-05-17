// To filter comments according to post ID

var post = {id:4, title: 'New Post'};
var comments = [
  {postId:4, content: 'Awesome'},
  {postId:3, content: 'Okay'},
  {postId:4, content: 'Neat'}
  ]

function commentsForPost(post, comments){
return comments.filter(function(comment){
  return comment.postId === post.id; //comments lo unna id & posts lo unna id equal ithe ah arrays return cheyali
});
}
commentsForPost(post,comments);