<template>
	<KQueryList>
		<KQueryTable>
			<KTableBar title="用户" :columns="columns" @refresh="fetchData">
				<template #buttons>
					<el-button
						v-access="'usermanagement:user:add'"
						type="primary"
						:icon="useRenderIcon('Plus')"
						@click="() => handleEdit({ title: '新增用户', effect: fetchData })"
					>
						新增
					</el-button>
				</template>
				<template #default="{ size, dynamicColumns }">
					<KTable
						border
						row-key="id"
						align-whole="center"
						show-overflow-tooltip
						table-layout="auto"
						:loading="loading"
						:size="size"
						height="100%"
						:data="listData"
						:columns="dynamicColumns"
						:pagination="pagination"
						:paginationSmall="size === 'small' ? true : false"
						@sort-change="handelSortChange"
						@page-size-change="handlePageSizeChange"
						@page-current-change="handleCurrentPageChange"
					>
						<template #operation="{ row }">
							<el-button
								v-access="'usermanagement:user:edit'"
								class="!m-0"
								link
								type="primary"
								:size="size"
								:icon="useRenderIcon('EditPen')"
								@click="
									() =>
										handleEdit({
											id: row.id,
											title: '编辑用户',

											effect: fetchData,
										})
								"
							>
								编辑
							</el-button>
							<el-button
								v-access="'usermanagement:user:del'"
								class="!m-0"
								link
								type="danger"
								:size="size"
								:icon="useRenderIcon('Delete')"
								@click="() => handleDelete(row.id, fetchData)"
							>
								删除
							</el-button>
						</template>

						<template #photo="{ row }">
							<div style="display: flex; align-items: center" v-if="row.photo">
								<el-image
									:src="`/api/file/download?fid=${row.photo}&appId=${initialState.id}&appCode=${initialState.appCode}`"
								/>
							</div>
							<div v-else>-</div>
						</template>
					</KTable>
				</template>
			</KTableBar>
		</KQueryTable>
	</KQueryList>
</template>
<script setup>
import { onBeforeMount } from "vue"
import {
	defineRouteMeta,
	usePageModel,
	getSortChangeStr,
	numeral,
	KFilePreviewer,
} from "@kesplus/kesplus"
import { deleteApi, pageApi } from "./utils/user-api"
import { handleEdit, handleView, handleDelete } from "./utils/hooks"
import dayjs from "@kesplus/dayjs"
defineOptions({
	handleEdit,
	handleView,
})
defineRouteMeta({
	title: "用户",
	anonymous: true,
})
const {
	queryForm,
	resetForm,
	loading,
	listData,
	pagination,
	handlePageSizeChange,
	handleCurrentPageChange,
	fetchData,
} = usePageModel({
	queryForm: {
		orderColumns: "",
	},
	pageSize: 10,
	fetch: async (_pager) => {
		const callback = await pageApi({
			...queryForm,
			pageIndex: _pager.currentPage,
			pageSize: _pager.pageSize,
		})
		return {
			totalElements: callback?.totalElements ?? 0,
			content: callback?.content || [],
		}
	},
	hasPermission: () => access.hasAccess("usermanagement:user:detail"),
})
const columns = [
	{
		label: "",
		type: "selection",
		align: "center",
		width: "28px",
		showOverflowTooltip: false,
	},
	//   {
	//     label: "序号",
	//     type: "index",
	//     width: 60,
	//   },

	{
		label: "用户ID",

		prop: "userId",

		align: "center",

		"min-width": "150px",

		sortable: "custom",

		// 使用 numeral 库对数据进行格式化
		formatter:
			// (row, column, cellValue, index) => { return typeof(cellValue) === "number"? numeral(cellValue).format("0,0"): cellValue}
			(row, column, cellValue, index) => cellValue,
	},
	{
		label: "用户名称",

		prop: "username",

		align: "center",

		"min-width": "150px",

		sortable: "custom",
	},
	{
		label: "密码",

		prop: "password",

		align: "center",

		"min-width": "150px",

		sortable: "custom",
	},
	{
		label: "性别",

		prop: "gender",

		align: "center",

		"min-width": "150px",

		sortable: "custom",

		formatter: (row, column, cellValue, index) => {
			return (
				[
					{ label: "男", value: "男" },
					{ label: "女", value: "女" },
				].find((item) => item.value === cellValue)?.label ?? cellValue
			)
		},
	},
	{
		label: "邮箱",

		prop: "email",

		align: "center",

		"min-width": "150px",

		sortable: "custom",
	},
	{
		label: "出生日期",

		prop: "birthday",

		align: "center",

		"min-width": "150px",

		sortable: "custom",

		formatter: (row, column, cellValue, index) => {
			return cellValue ? dayjs(cellValue).format("YYYY-MM-DD") : "-"
		},
	},
	{
		label: "身份证号",

		prop: "idNumber",

		align: "center",

		"min-width": "150px",

		sortable: "custom",
	},
	{
		label: "电话号码",

		prop: "phoneNumber",

		align: "center",

		"min-width": "150px",

		sortable: "custom",
	},
	{
		label: "头像",

		prop: "photo",

		align: "center",

		"min-width": "150px",

		sortable: "custom",

		slot: "photo",
	},
	{
		label: "操作",
		width: 230,
		align: "center",
		fixed: "right",
		slot: "operation",
		showOverflowTooltip: false,
	},
]
const handelSortChange = ({ prop, order }) => {
	queryForm.orderColumns = getSortChangeStr({ prop, order })
	fetchData()
}
onBeforeMount(fetchData)
</script>
