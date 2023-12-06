
document.addEventListener('DOMContentLoaded', function () {


    document.getElementById('calculateBtn').addEventListener('click', function () {
        var loanAmount = parseFloat(document.getElementById('loanAmount').value);
        var interestRate = parseFloat(document.getElementById('loanTerm').value);
        var loanTerm = parseFloat(document.getElementById('interestRate').value);

        if (isNaN(loanAmount) || isNaN(interestRate) || isNaN(loanTerm)) {
            alert('Por favor, ingresa números válidos en todos los campos.');
            return;
        }

        var monthlyInterest = interestRate / (12 * 100);
        var numberOfPayments = loanTerm;
        var monthlyPayment =
            (loanAmount * monthlyInterest) /
            (1 - Math.pow(1 + monthlyInterest, -numberOfPayments));

        var totalInterest = (monthlyPayment * numberOfPayments) - loanAmount;

        var formattedResult = new Intl.NumberFormat('es-DO', {
            style: 'currency',
            currency: 'DOP'
        }).format(monthlyPayment.toFixed(2));

        var formattedInterest = new Intl.NumberFormat('es-DO', {
            style: 'currency',
            currency: 'DOP'
        }).format(totalInterest.toFixed(2));

        var resultLabel = document.getElementById('resultLabel');
        resultLabel.innerHTML = `<strong>Pago mensual:</strong> ${formattedResult}<br><strong>Interés total:</strong> ${formattedInterest}`;

        var resultAlert = document.getElementById('resultAlert');
        resultAlert.style.display = 'block';

    });
});
