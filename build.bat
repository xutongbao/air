set aa=hello,world!
echo before:%aa%
echo after:%aa:world=china%
echo aa=%aa%
echo %aa%
set aa=%aa:world=china%
echo aa=%aa% 
set branchTemp=%branch:/=\%
echo %branchTemp%
call yarn
echo install done
set MODE_ENV=jenkins 
set BUILD_PATH=/temp/air/%branch% 
set PUBLIC_URL=/air/%branch% 
set GENERATE_SOURCEMAP=false 
node scripts/build.js
@REM xcopy D:\\Jenkins\\workspace\\air D:\\temp\\air\\%branchTemp%\\ /Y /E
