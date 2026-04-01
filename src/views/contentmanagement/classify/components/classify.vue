<template>
	<KSection>
		<KBlock :bordered="true">
			<KFormGrid :maxColumns="2" :columnGap="32" :strictAutoFit="true">
				<KFormGridColumn :grid-span="1">
					<el-form-item label="分类ID" prop="classifyId" :rules="[required]">
						<el-input-number :clearable="true" v-model="form.classifyId">
						</el-input-number>
					</el-form-item>
				</KFormGridColumn>
				<KFormGridColumn :grid-span="1">
					<el-form-item label="分类名称" prop="classifyName">
						<el-input :clearable="true" v-model="form.classifyName"> </el-input>
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
form.classify ||= {}
const props = defineProps({
	id: { type: String },
})
</script>
