<template>
	<KSection>
		<KBlock :bordered="true">
			<KFormGrid :maxColumns="2" :columnGap="32" :strictAutoFit="true">
				<KFormGridColumn :grid-span="1">
					<el-form-item label="内容ID" prop="contentId" :rules="[required]">
						<el-input-number :clearable="true" v-model="form.contentId">
						</el-input-number>
					</el-form-item>
				</KFormGridColumn>
				<KFormGridColumn :grid-span="1">
					<el-form-item label="标题" prop="title">
						<el-input :clearable="true" v-model="form.title"> </el-input>
					</el-form-item>
				</KFormGridColumn>
				<KFormGridColumn :grid-span="1">
					<el-form-item label="网址" prop="url">
						<el-input :clearable="true" v-model="form.url"> </el-input>
					</el-form-item>
				</KFormGridColumn>
				<KFormGridColumn :grid-span="1">
					<el-form-item label="发布时间" prop="publishTime">
						<el-date-picker
							:clearable="true"
							v-model="form.publishTime"
							type="date"
						>
						</el-date-picker>
					</el-form-item>
				</KFormGridColumn>
				<KFormGridColumn :grid-span="1">
					<el-form-item label="发布者" prop="publisher">
						<el-input :clearable="true" v-model="form.publisher"> </el-input>
					</el-form-item>
				</KFormGridColumn>
				<KFormGridColumn :grid-span="1">
					<el-form-item label="类型" prop="type">
						<el-input :clearable="true" v-model="form.type"> </el-input>
					</el-form-item>
				</KFormGridColumn>
				<KFormGridColumn :grid-span="1">
					<el-form-item label="分类ID" prop="classifyId">
						<el-input-number :clearable="true" v-model="form.classifyId">
						</el-input-number>
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
form.content ||= {}
const props = defineProps({
	id: { type: String },
})
</script>
