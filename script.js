var _a;
if (((_a = window.nzxt) === null || _a === void 0 ? void 0 : _a.v1) !== undefined) {
    window.nzxt.v1.onMonitoringDataUpdate = (data) => {
        // Implement your logic to handle monitoring data update
        console.log('Monitoring data updated:', data);
    };
}
else {
    alert(undefined);
}
export {};
