/*
 * Public API Surface of banbeis-shared-services
 */

// services
export * from './lib/banbeis-shared-services.service';
export * from './lib/service/navigation/navigation.service';
export * from './lib/service/primeng-icon/icon.service';
export * from './lib/service/designation/designation.service'
export * from './lib/service/designation/all-designations-gql.service'
export * from './lib/service/designation/designation-by-id-service'
export * from './lib/service/designation/save-designation-gql.service'
export * from './lib/service/designation/update-designation-gql.service'

export * from './lib/pipes/bangla-number-translate.pipe'

// components
export * from './lib/banbeis-shared-services.component';

//modules
export * from './lib/banbeis-shared-services.module';

//models
export * from './lib/models/navigation';
