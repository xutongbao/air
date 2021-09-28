set aa=hello！world
echo 替换前:%aa%
echo 替换后:%aa:world=china%
echo aa=%aa%
echo %aa%
set aa=%aa:world=china%
echo aa=%aa% 