<template>
	<KSection>
		<KBlock :bordered="true">
			<KFormGrid :maxColumns="2" :columnGap="32" :strictAutoFit="true">
				<KFormGridColumn :grid-span="1">
					<el-form-item label="user_id" prop="userId" :rules="[required]">
						<el-input-number :clearable="true" v-model="form.userId">
						</el-input-number>
					</el-form-item>
				</KFormGridColumn>
				<KFormGridColumn :grid-span="1">
					<el-form-item label="content_id" prop="contentId" :rules="[required]">
						<el-input-number :clearable="true" v-model="form.contentId">
						</el-input-number>
					</el-form-item>
				</KFormGridColumn>
				<KFormGridColumn :grid-span="1">
					<el-form-item
						label="collection_time"
						prop="collectionTime"
						:rules="[required]"
					>
						<el-date-picker
							:clearable="true"
							v-model="form.collectionTime"
							type="date"
						>
						</el-date-picker>
					</el-form-item>
				</KFormGridColumn>
				<KFormGridColumn :grid-span="1">
					<el-form-item
						label="collection_state"
						prop="collectionState"
						:rules="[required]"
					>
						<el-switch :clearable="true" v-model="form.collectionState">
						</el-switch>
					</el-form-item>
				</KFormGridColumn>
			</KFormGrid>
		</KBlock>
	</KSection>
</template>
<script setup>
import { ref, toRef, watchEffect } from "vue"
import {
	useDialogFormContext,
	required,
	email as mail,
	phone as phoneNumber,
	lengthValidate,
} from "@kesplus/kesplus"
const { form, submit, reset, fetchById } = useDialogFormContext()
form.collection ||= {}
const props = defineProps({
	id: { type: String },
})
</script>
