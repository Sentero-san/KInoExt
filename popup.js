document.getElementById('redirectBtn').addEventListener('click', async () => {
    // Получаем текущую активную вкладку
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    
    if (tab && tab.url) {
        let currentUrl = tab.url;

        // Проверяем, что мы действительно на Кинопоиске
        if (currentUrl.includes('kinopoisk.ru')) {
            // Заменяем доменное имя
            let newUrl = currentUrl.replace('kinopoisk.ru', 'kinokino.vip');
            
            // Перенаправляем текущую вкладку на новый URL
            chrome.tabs.update(tab.id, { url: newUrl });
            
            // Закрываем маленькое окошко расширения
            window.close();
        }
        else if (currentUrl.includes('youtube')) {
            let fileUrl = chrome.runtime.getURL('icond.png');     
            chrome.tabs.create({ url: fileUrl }, (tab) => {
               alert('Т̶̢̢̧̡̛̖͍̺͚̼̗̙̼̥̣̯̹̰̝̹̑ͮ̓͗̌̽̍̌̏̀̐́̓̓̕͢͜͡ͅы͎̳͓̱͇͊͊͟ п͎̯̼̑ͩ̓̾̕͘͢͡ͅр̶̼͟͠_̛̛̞̀̿̍ͯ̀̇͟о̳̎к̴̴̶̵̦̘̤̣͙̘͍̻̫̰͎͗̂ͣ̏̑͌͂́̂ͮ͆ͤ̈̄͘͘̚͢͢л̩̠͈̥ͤͪͩ_̢̛̯̗̺͙̣̭̱̹͎ͪ̽ͫ̽̄̔ͥ̄̌̎̈͌̇ͩ̈̈̚͢͜͡ͅя͖̮͍̹̞̝́́̇̈́т̸̧̛̻̲̤͙̯̦̫̣ͦ̔̊̋ͤ̉̃ͭ͋͋͊͂ͦ́́̚͟͟͝͞͡');
               window.close();
            });           
         }         
        
        else {
            alert('Вы не на сайте Кинопоиск!');
        }
    }
});