call yarn
echo install done
set MODE_ENV=production 
set BUILD_PATH=build
set PUBLIC_URL=/air/%branch%
set GENERATE_SOURCEMAP=false 
call node scripts/build.js
xcopy \Jenkins\workspace\air\build \temp\air\%branch:/=\%\ /Y /E
for /f "tokens=4" %%a in ('route print^|findstr 0.0.0.0.*0.0.0.0') do (
 set IP=%%a
)
echo %IP%
set myBranch=/air/%branch%
set IP=%IP%
call node buildDone
echo http://39.97.238.175:81/air/%branch%
