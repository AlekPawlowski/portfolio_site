/** 
 * in theory here should be mine entry page, animation of drawing rectangle
 * and after animation 
*/

// const Canvas = props => <canvas {...props} />

// export default function Inilitze(): JSX.Element {
    
//     return <canvas id="canvas"></canvas>
// }

// // var canvas = document.getElementById("myCanvas");
// //     var ctx = canvas.getContext("2d");

// //     // Set the size of the canvas
// //     canvas.width = 200;
// //     canvas.height = 200;

// //     // Set the center point of the circle
// //     var centerX = canvas.width / 2;
// //     var centerY = canvas.height / 2;

// //     // Set the radius of the circle
// //     var radius = 80;

// //     // Set the duration of the animation (in milliseconds)
// //     var duration = 1000;

// //     // Set the start time of the animation
// //     var startTime = null;

// //     // Define the animation function
// //     function draw(currentTime) {
// //         // Check if the start time is null
// //         if (!startTime) {
// //             startTime = currentTime;
// //         }

// //         // Calculate the elapsed time
// //         var elapsedTime = currentTime - startTime;

// //         // Calculate the current progress
// //         var progress = elapsedTime / duration;

// //         // Clear the canvas
// //         ctx.clearRect(0, 0, canvas.width, canvas.height);

// //         // Draw the circle
// //         ctx.beginPath();
// //         ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI * progress);
// //         ctx.stroke();

// //         // Check if the animation is complete
// //         if (progress < 1) {
// //             // Continue the animation
// //             requestAnimationFrame(draw);
// //         }
// //     }