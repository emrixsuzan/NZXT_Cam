alert("Hello! I am an alert box!!");
import { MonitoringData } from "@nzxt/web-integrations-types/v1";

const { height, width, targetFps, shape } = window.nzxt.v1;

window.nzxt = {
  v1: {
    onMonitoringDataUpdate: (data: MonitoringData) => {
      const { cpus, gpus, ram, kraken } = data;

      // build cool visualizations with this data!
    }
  }
};
