exports.authentication = (req, res)=>{
  console.log(req.body)
  var post = req.body;
  if (post.title === '1' && post.pwd === 'naveen') {
     res.send('Welcome');
   } 
   else {
     res.send('Bad user/pass');
   }
}