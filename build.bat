call yarn
echo install done
set MODE_ENV=jenkins 
set BUILD_PATH=build
set PUBLIC_URL=/air/%branch%
set GENERATE_SOURCEMAP=false 
call node scripts/build.js
xcopy D:\Jenkins\workspace\air\build D:\temp\air\%branch:/=\%\ /Y /E
call set myBranch=/air/%branch% && node buildDone
echo http://localhost:81/air/%branch%
