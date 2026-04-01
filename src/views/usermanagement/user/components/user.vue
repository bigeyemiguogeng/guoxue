<template>
	<KSection>
		<KBlock :bordered="true">
			<KFormGrid :maxColumns="2" :columnGap="32" :strictAutoFit="true">
				<KFormGridColumn :grid-span="1">
					<el-form-item label="用户ID" prop="userId" :rules="[required]">
						<el-input-number :clearable="true" v-model="form.userId">
						</el-input-number>
					</el-form-item>
				</KFormGridColumn>
				<KFormGridColumn :grid-span="1">
					<el-form-item label="用户名称" prop="username">
						<el-input :clearable="true" v-model="form.username"> </el-input>
					</el-form-item>
				</KFormGridColumn>
				<KFormGridColumn :grid-span="1">
					<el-form-item label="密码" prop="password" :rules="[required]">
						<el-input :clearable="true" v-model="form.password"> </el-input>
					</el-form-item>
				</KFormGridColumn>
				<KFormGridColumn :grid-span="1">
					<el-form-item label="性别" prop="gender" :rules="[]">
						<el-select
							:clearable="true"
							v-model="form.gender"
							:multiple="false"
						>
							<el-option value="男" label="男"> </el-option>
							<el-option value="女" label="女"> </el-option>
						</el-select>
					</el-form-item>
				</KFormGridColumn>
				<KFormGridColumn :grid-span="1">
					<el-form-item label="邮箱" prop="email">
						<el-input :clearable="true" v-model="form.email"> </el-input>
					</el-form-item>
				</KFormGridColumn>
				<KFormGridColumn :grid-span="1">
					<el-form-item label="出生日期" prop="birthday">
						<el-date-picker
							:clearable="true"
							v-model="form.birthday"
							type="date"
						>
						</el-date-picker>
					</el-form-item>
				</KFormGridColumn>
				<KFormGridColumn :grid-span="1">
					<el-form-item label="身份证号" prop="idNumber">
						<el-input :clearable="true" v-model="form.idNumber"> </el-input>
					</el-form-item>
				</KFormGridColumn>
				<KFormGridColumn :grid-span="1">
					<el-form-item label="电话号码" prop="phoneNumber">
						<el-input :clearable="true" v-model="form.phoneNumber"> </el-input>
					</el-form-item>
				</KFormGridColumn>
				<KFormGridColumn :grid-span="1">
					<el-form-item label="头像" prop="photo" :rules="[]">
						<k-image-upload
							:clearable="true"
							:limit="1"
							v-model:values="form._photo"
							v-model="form.photo"
						>
						</k-image-upload>
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
form.user ||= {}
const props = defineProps({
	id: { type: String },
})
</script>
