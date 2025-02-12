// Menjalankan kode setelah seluruh dokumen selesai dimuat
document.addEventListener('DOMContentLoaded', function() {
    // Mengambil elemen-elemen input dan tombol dari HTML
    const celciusInput = document.getElementById('main-input');
    const resultInput = document.getElementById('main-result');
    const caraKonversiInput = document.getElementById('cara-konversi');
    const convertButton = document.getElementById('convertButton');
    const resetButton = document.getElementById('resetButton');
    const reverseButton = document.getElementById('reverseButton');
    const konversiLabel = document.querySelector("label[for='main-input']");
    const hasilLabel = document.querySelector("label[for='main-result']");
    const konversiLink = document.getElementById('konversi-link');
    
    // Variabel untuk melacak klik reset dan mode konversi
    let resetClickCount = 0;
    let resetTimer;
    let isCelciusToFahrenheit = true;

    // Fungsi untuk memperbarui tampilan UI berdasarkan mode konversi
    function updateKonversiUI() {
        if (isCelciusToFahrenheit) {
            konversiLabel.textContent = 'Celcius (°C)';
            hasilLabel.textContent = 'Fahrenheit (°F)';
            celciusInput.placeholder = 'Masukkan suhu dalam Celcius';
            resultInput.placeholder = 'Hasil konversi ke Fahrenheit';
            konversiLink.textContent = 'Konversi Celcius ke Fahrenheit';
        } else {
            konversiLabel.textContent = 'Fahrenheit (°F)';
            hasilLabel.textContent = 'Celcius (°C)';
            celciusInput.placeholder = 'Masukkan suhu dalam Fahrenheit';
            resultInput.placeholder = 'Hasil konversi ke Celcius';
            konversiLink.textContent = 'Konversi Fahrenheit ke Celcius';
        }
    }

    // Event listener untuk tombol konversi
    convertButton.addEventListener('click', function() {
        if (isCelciusToFahrenheit) {
            const celcius = parseFloat(celciusInput.value);
            if (!isNaN(celcius)) {
                const fahrenheit = (celcius * 9/5) + 32;
                resultInput.value = fahrenheit.toFixed(2);
                caraKonversiInput.value = `(${celcius}°C * 9/5) + 32 = ${fahrenheit.toFixed(2)}°F`;
            } else {
                alert('Masukkan suhu yang valid dalam Celcius >_<');
            }
        } else {
            const fahrenheit = parseFloat(celciusInput.value);
            if (!isNaN(fahrenheit)) {
                const celcius = (fahrenheit - 32) * 5/9;
                resultInput.value = celcius.toFixed(2);
                caraKonversiInput.value = `(${fahrenheit}°F - 32) * 5/9 = ${celcius.toFixed(2)}°C`;
            } else {
                alert('Masukkan suhu yang valid dalam Fahrenheit >_<');
            }
        }
    });

    // Event listener untuk tombol reset
    resetButton.addEventListener('click', function() {
        celciusInput.value = '';
        resultInput.value = '';
        caraKonversiInput.value = '';
        
        // Mengembalikan mode konversi ke default jika perlu
        if (!isCelciusToFahrenheit) {
            isCelciusToFahrenheit = true;
            updateKonversiUI();
        }

        // Menghitung jumlah klik reset dalam satu detik
        resetClickCount++;
        if (resetClickCount === 5) {
            alert('udah bang🗿');
            resetClickCount = 0;
            clearTimeout(resetTimer);
        }
        if (resetClickCount === 1) {
            resetTimer = setTimeout(function() {
                resetClickCount = 0;
            }, 1000);
        }
    });

    // Event listener untuk tombol reverse (membalik konversi)
    reverseButton.addEventListener('click', function() {
        isCelciusToFahrenheit = !isCelciusToFahrenheit;
        updateKonversiUI();

        // Menukar nilai input dan hasil
        const temp = celciusInput.value;
        celciusInput.value = resultInput.value;
        resultInput.value = temp;

        // Memperbarui cara konversi berdasarkan mode
        if (isCelciusToFahrenheit) {
            const celcius = parseFloat(celciusInput.value);
            if (!isNaN(celcius)) {
                const fahrenheit = (celcius * 9/5) + 32;
                caraKonversiInput.value = `(${celcius}°C * 9/5) + 32 = ${fahrenheit.toFixed(2)}°F`;
            } else {
                caraKonversiInput.value = '';
            }
        } else {
            const fahrenheit = parseFloat(celciusInput.value);
            if (!isNaN(fahrenheit)) {
                const celcius = (fahrenheit - 32) * 5/9;
                caraKonversiInput.value = `(${fahrenheit}°F - 32) * 5/9 = ${celcius.toFixed(2)}°C`;
            } else {
                caraKonversiInput.value = '';
            }
        }
    });

    // Memperbarui UI saat halaman pertama kali dimuat
    updateKonversiUI();
});
