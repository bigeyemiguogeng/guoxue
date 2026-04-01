/**
 * 从金仓数据库获取视频列表
 * 对应表：content
 */
export async function getVideoList() {
    // 1. 修正语法：条件连接符使用 AND
    // 2. 别名采用小写，避免部分环境下的大小写敏感问题
    const sql = `
        SELECT 
            content_id as id, 
            url as videourl, 
            publisher as author, 
            publish_time as publishtime,
            classify_id
        FROM content 
        WHERE type = '视频' AND classify_id = 3
        ORDER BY publish_time DESC
    `;
    
    try {
        // 使用 KESPlus 内置的 db 对象执行查询
        const result = await db.query(sql); 
        
        // 兼容处理：确保返回的是数组
        // 如果 KESPlus 返回的是 { rows: [...] } 则取 rows，否则取自身
        return result.rows || result || []; 
    } catch (error) {
        console.error("【后端错误】金仓数据库查询失败:", error);
        return [];
    }
}