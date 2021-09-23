var initialPrice = document.querySelector('#initial-price');
var noOfStocks = document.querySelector('#stocks-quantity');
var currentPrice = document.querySelector('#current-price');
var submitBtn = document.querySelector('#submit-btn');
var outputBox = document.querySelector('#output-box');

function submitHandler() {
    var ip = Number(initialPrice.value);
    var qty = Number(noOfStocks.value);
    var curr = Number(currentPrice.value);

    calculateProfitAndLoss(ip, qty, curr);
}

function calculateProfitAndLoss(initial, quantity, current) {

    

    if (initial > 0 && current > 0 && quantity > 0) //no stock can ever have a initial price or current price as zero so >0 can be done here instead of writing a whole pls fill all the fields message
    {
        if (initial > current) {
            var loss = ((initial - current) * quantity).toFixed(2);
            var lossPercentage = (((initial-current)*100)/initial).toFixed(2);
            // var lossPercentage = ((loss / initial)* 100).toFixed(2);
            // var l = loss.toFixed(2);
            // var los = lossPercentage.toFixed(2);
           if(lossPercentage<50)
           {
            showOutput(` Uh Oh! The loss is ${loss} and the loss percentage is ${lossPercentage}%`);

           }
           else if(lossPercentage>50){
           showOutput(`Uh Oh! The loss is ${loss} and the loss percentage is ${lossPercentage}%`)
           }
            

        } else if (current > initial) {
            var profit = (current - initial) * quantity;
            var profitPercentage = (((current-initial) * 100)/initial);
            // var profitPercentage = (profit / initial) * 100;
                var p = profit.toFixed(2);
                var pro = profitPercentage.toFixed(2);
            if(pro<50){
            showOutput(`Congratulations!! The profit is ${p} and the profit percentage is ${pro}% !`)

            }
            else if(pro>=50){
            showOutput(`Congratulations!! The profit is ${p} and the profit percentage is ${pro}% !`)
            }
        } else if (current = initial) {
            showOutput("No loss, No gain - Your investment remains the same")

        }
    } else {
        showOutput("please enter the values")
    }

}

submitBtn.addEventListener('click', submitHandler);

function showOutput(message) {
    outputBox.innerHTML = message;
}