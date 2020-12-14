const reporter = require('cucumber-html-reporter');
const rimraf = require('rimraf');

rimraf.sync('./e2e/reports/json/*.json');
exports.config = {

    baseUrl: 'https://po-ui.io/',
    allScriptsTimeout: 16000,
    DirectConnect: true,
    specs: [
        './src/cucumber-features/*.feature',
    ],

    multiCapabilities: [
        {
            'browserName': 'chrome',
            'shardTestFiles': false,
            'maxInstances': 1,
            'chromeOptions': {
                'mobileEmulation': { 'deviceName': 'Galaxy S5' },
                args: ['lang=pt-BR', '--window-size=360x640'],
                // prefs: {
                //   'download': {
                //     'prompt_for_download': false,
                //   },
                //   'intl': { accept_languages: "pt-BR" }
                // }
            }
        },
        // {
        //   'browserName': 'firefox',
        //   "marionette": true,
        //   'maxInstances': 1,
        //   'moz:firefoxOptions': {
        //     prefs: {
        //       'intl.accept_languages': 'pt',
        //       'browser.helperApps.neverAsk.saveToDisk': 'application/vnd.ms-excel',
        //     }
        //   }
        // },
        // {
        //   'browserName': 'MicrosoftEdge',
        //   'maxInstances': 1,
        //   'platformName': 'windows',
        //   'nativeEvents': false,
        //   args: ['--start-maximized']
        // }
    ],

    onPrepare: function () {
        require('ts-node').register({
            project: require('path').join(__dirname, './tsconfig.e2e.json')
        });
    },

    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    cucumberOpts: {
        require: ['./src/specs/meu-rh-home.e2e-spec.ts'],
        format: "json:./e2e/reports/json/cucumber_report.json",
        strict: true,
        tags: ["@cards-home"],
        // retry: 2
    },

    onComplete: function () {
        const options = {
            theme: 'bootstrap',
            jsonDir: './e2e/reports/json/',
            output: './e2e/reports/html/cucumber_report_' + getDate() + '.html',
            screenshotsDirectory: './e2e/reports/screenshots/',
            storeScreenshots: true,
            reportSuiteAsScenarios: true,
            scenarioTimestamp: true,
            launchReport: true,
            // metadata: {
            // "App Version": "0.3.2",
            // "Test Environment": "Staging",
            // "Browser": "Chrome",
            // "Platform": "Windows 10",
            // "Parallel": "Scenarios",
            // "Executed": "Remote"
            // }
        };
        reporter.generate(options);
    }
};

function getDate() {
    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth() + 1;
    let yyyy = today.getFullYear();
    let hora = today.getHours();
    let minutos = today.getMinutes();
    let segundos = today.getSeconds();

    if (dd < 10) {
        dd = '0' + dd;
    }
    if (mm < 10) {
        mm = '0' + mm;
    }
    today = `${dd}-${mm}-${yyyy}_${hora}.${minutos}.${segundos}`;
    return today;
}