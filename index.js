
import scrape from 'website-scraper';
import SaveToExistingDirectoryPlugin from 'website-scraper-existing-directory';
const websiteUrl = 'https://url'; 
const SLEEP_HOURS = 3;

while (true) {
    console.log('Starting...');
    scrape({ 
        urls: [websiteUrl],
        urlFilter: function (url) {
            return url.indexOf(websiteUrl) === 0;
        },
        plugins: [ new SaveToExistingDirectoryPlugin() ],
        recursive: true,
        maxDepth: 50, 
        prettifyUrls: true,
        filenameGenerator: 'bySiteStructure',
        directory: './directory',
    }).then((data) => { 
        console.log('Entire website succesfully downloaded'); 
    }).catch((err) => { 
        console.log('An error ocurred', err);
        return -1;
    });
    await new Promise(r => setTimeout(r, SLEEP_HOURS * 60 * 60 * 1000));
}
