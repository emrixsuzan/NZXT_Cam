import { MonitoringData } from "@nzxt/web-integrations-types/v1";

if (window.nzxt?.v1 !== undefined) {
  window.nzxt.v1.onMonitoringDataUpdate = (data: MonitoringData) => {
  // Implement your logic to handle monitoring data update
  console.log('Monitoring data updated:', data);
  };
} else {
  alert("undefined");
}
  