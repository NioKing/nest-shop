import { Module } from "@nestjs/common";
import { MetricsController } from "./metrics.controller";
import { PrometheusModule } from "@willsoto/nestjs-prometheus";

@Module({
    imports: [
        PrometheusModule.register({
            controller: MetricsController,
        })
    ],
    controllers: [MetricsController]
})
export class MetricsModule { }