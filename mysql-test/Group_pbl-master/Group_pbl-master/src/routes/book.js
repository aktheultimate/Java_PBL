function openit()
{
    var from = document.getElementById('from').value;
    var to = document.getElementById('to').value;
    alert("Recieved From: " + from + " to: " + to);
    module.exports = {to,from};
    console.log(to, from);
}