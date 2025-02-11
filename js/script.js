document.addEventListener('DOMContentLoaded', function() {
    const celciusInput = document.getElementById('main-input');
    const resultInput = document.getElementById('main-result');
    const caraKonversiInput = document.getElementById('cara-konversi');
    const convertButton = document.getElementById('convertButton');
    const resetButton = document.getElementById('resetButton');
    const reverseButton = document.getElementById('reverseButton');

    convertButton.addEventListener('click', function() {
        const celcius = parseFloat(celciusInput.value);
        if (!isNaN(celcius)) {
            const fahrenheit = (celcius * 9/5) + 32;
            resultInput.value = fahrenheit.toFixed(2);
            caraKonversiInput.value = `(${celcius}°C * 9/5) + 32 = ${fahrenheit.toFixed(2)}°F`;
        } else {
            alert('Masukkan suhu yang valid dalam Celcius >_<');
        }
    });

    resetButton.addEventListener('click', function() {
        celciusInput.value = '';
        resultInput.value = '';
        caraKonversiInput.value = '';
    });

    reverseButton.addEventListener('click', function() {
        const fahrenheit = parseFloat(resultInput.value);
        if (!isNaN(fahrenheit)) {
            const celcius = (fahrenheit - 32) * 5/9;
            celciusInput.value = celcius.toFixed(2);
            caraKonversiInput.value = `(${fahrenheit}°F - 32) * 5/9 = ${celcius.toFixed(2)}°C`;
        } else {
            alert('Tidak ada hasil konversi yang valid untuk dibalik T_T');
        }
    });
});
