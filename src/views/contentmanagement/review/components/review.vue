<template>
	<KSection>
		<KBlock :bordered="true">
			<KFormGrid :maxColumns="2" :columnGap="32" :strictAutoFit="true">
				<KFormGridColumn :grid-span="1">
					<el-form-item label="评论ID" prop="reviewId" :rules="[required]">
						<el-input-number :clearable="true" v-model="form.reviewId">
						</el-input-number>
					</el-form-item>
				</KFormGridColumn>
				<KFormGridColumn :grid-span="1">
					<el-form-item label="评论内容" prop="reviewContent">
						<el-input :clearable="true" v-model="form.reviewContent">
						</el-input>
					</el-form-item>
				</KFormGridColumn>
				<KFormGridColumn :grid-span="1">
					<el-form-item label="评论时间" prop="reviewTime">
						<el-date-picker
							:clearable="true"
							v-model="form.reviewTime"
							type="date"
						>
						</el-date-picker>
					</el-form-item>
				</KFormGridColumn>
				<KFormGridColumn :grid-span="1">
					<el-form-item label="用户ID" prop="userId" :rules="[required]">
						<el-input-number :clearable="true" v-model="form.userId">
						</el-input-number>
					</el-form-item>
				</KFormGridColumn>
				<KFormGridColumn :grid-span="1">
					<el-form-item label="内容ID" prop="contentId" :rules="[required]">
						<el-input-number :clearable="true" v-model="form.contentId">
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
form.review ||= {}
const props = defineProps({
	id: { type: String },
})
</script>
