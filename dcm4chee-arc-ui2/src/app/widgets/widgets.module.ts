import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WidgetsComponent } from './widgets.component';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {MdDialogConfig} from '@angular/material';
import { MessagingComponent } from './messaging/messaging.component';
import {EditPatientComponent} from './dialogs/edit-patient/edit-patient.component';
import { EditMwlComponent } from './dialogs/edit-mwl/edit-mwl.component';
import { CopyMoveObjectsComponent } from './dialogs/copy-move-objects/copy-move-objects.component';
import { ConfirmComponent } from './dialogs/confirm/confirm.component';
import { EditStudyComponent } from './dialogs/edit-study/edit-study.component';
import { DeleteRejectedInstancesComponent } from './dialogs/delete-rejected-instances/delete-rejected-instances.component';
import {CalendarModule} from 'primeng/components/calendar/calendar';
import { CreateAeComponent } from './dialogs/create-ae/create-ae.component';
import { ProductLabellingComponent } from './dialogs/product-labelling/product-labelling.component';
import { CreateExporterComponent } from './dialogs/create-exporter/create-exporter.component';
import { ExportDialogComponent } from './dialogs/export/export.component';
import { CloneSelectorComponent } from './dialogs/clone-selector/clone-selector.component';
import { UploadVendorComponent } from './dialogs/upload-vendor/upload-vendor.component';
import { UploadDicomComponent } from './dialogs/upload-dicom/upload-dicom.component';
import { RemovePartSelectorComponent } from './dialogs/remove-part-selector/remove-part-selector.component';
import { InfoComponent } from './dialogs/info/info.component';
import { UploadFilesComponent } from './dialogs/upload-files/upload-files.component';
import { HistogramDialogComponent } from './dialogs/histogram-dialog/histogram-dialog.component';
import { DiffDetailViewComponent } from './dialogs/diff-detail-view/diff-detail-view.component';
import { DicomOperationsComponent } from './dialogs/dicom-operations/dicom-operations.component';
import { SpecificCharPickerComponent } from './specific-char-picker/specific-char-picker.component';
import { RetentionPolicyDialogComponent } from './dialogs/retention-policy-dialog/retention-policy-dialog.component';
import { DictionaryPickerComponent } from './dictionary-picker/dictionary-picker.component';
import { TimePickerComponent } from './time-picker/time-picker.component';
import { DurationPickerComponent } from './duration-picker/duration-picker.component';
import { SchedulePickerComponent } from './schedule-picker/schedule-picker.component';
import { AttributeInfoComponent } from './attribute-info/attribute-info.component';
import { ViewerComponent } from './dialogs/viewer/viewer.component';


@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        FormsModule,
        CalendarModule
    ],
    declarations: [WidgetsComponent ],
    exports: [WidgetsComponent],
    providers: [MdDialogConfig]
})
export class WidgetsModule { }
export const WidgetsComponents = [
    MessagingComponent,
    EditPatientComponent,
    EditMwlComponent,
    EditStudyComponent,
    CreateAeComponent,
    CopyMoveObjectsComponent,
    ConfirmComponent,
    DeleteRejectedInstancesComponent,
    ProductLabellingComponent,
    CreateExporterComponent,
    ExportDialogComponent,
    CloneSelectorComponent,
    UploadVendorComponent,
    UploadDicomComponent,
    RemovePartSelectorComponent,
    InfoComponent,
    UploadFilesComponent,
    HistogramDialogComponent,
    DiffDetailViewComponent,
    DicomOperationsComponent,
    SpecificCharPickerComponent,
    RetentionPolicyDialogComponent,
    SpecificCharPickerComponent,
    DictionaryPickerComponent,
    TimePickerComponent,
    DurationPickerComponent,
    SchedulePickerComponent,
    AttributeInfoComponent,
    ViewerComponent
];
