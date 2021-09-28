set aa=hello,world!
echo before:%aa%
echo after:%aa:world=china%
echo aa=%aa%
echo %aa%
set aa=%aa:world=china%
echo aa=%aa% 
set branchTemp=%branch:/=\%
echo %branchTemp%
cross-env MODE_ENV=jenkins BUILD_PATH=/temp/air/%branchTemp% PUBLIC_URL=/air/%branchTemp% GENERATE_SOURCEMAP=false node scripts/build.js
@REM xcopy D:\\Jenkins\\workspace\\air D:\\temp\\air\\%branchTemp%\\ /Y /E
