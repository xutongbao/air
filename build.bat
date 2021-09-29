@REM 安装依赖
call yarn
echo install done

@REM 设置git仓库名称
set gitRepositorieName=air

@REM 设置环境变量并编译
set MODE_ENV=production 
set BUILD_PATH=build
set PUBLIC_URL=/%gitRepositorieName%/%branch%
set GENERATE_SOURCEMAP=false 
call node scripts/build.js

@REM 复制编译好的的代码到新目录
xcopy \Jenkins\workspace\%gitRepositorieName%\build \temp\%gitRepositorieName%\%branch:/=\%\ /Y /E

@REM 查询IP地址
for /f "tokens=4" %%a in ('route print^|findstr 0.0.0.0.*0.0.0.0') do (
 set IP=%%a
)
echo %IP%

@REM 设置环境变量并执行js脚本发送邮件通知、添加构建记录
set myBranch=/%gitRepositorieName%/%branch%
set IP=%IP%
call node buildDone
echo http://39.97.238.175:81/%gitRepositorieName%/%branch%
