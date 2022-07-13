# プロキシ設定

## PowerShell
```
$env:HTTP_PROXY="http://proxy.mycom.co.jp:8080/"
$env:HTTPS_PROXY="http://proxy.mycom.co.jp:8080/"
```

※ [about_Profiles](https://docs.microsoft.com/ja-jp/powershell/module/microsoft.powershell.core/about/about_profiles?view=powershell-7.2)

### 設定の確認

```
get-childitem env:
```
> HTTP_PROXY  http://proxy.mycom.co.jp:8080/  
> HTTPS_PROXY http://proxy.mycom.co.jp:8080/

## Git
```
git config --global http.proxy http://proxy.mycom.co.jp:8080
git config --global https.proxy http://proxy.mycom.co.jp:8080
```

### 設定の確認
```
git config --list
```

## npm
```
proxy=http://proxy.mycom.co.jp:8080/
http-proxy=http://proxy.mycom.co.jp:8080/
https-proxy=http://proxy.mycom.co.jp:8080/
registry=https://registry.npmjs.org/
```

※ [npmrc](https://docs.npmjs.com/cli/v8/configuring-npm/npmrc)

### 設定の確認

```
npm config list
```

> http-proxy = "http://proxy.mycom.co.jp:8080/"  
> https-proxy = "http://proxy.mycom.co.jp:8080/"  
> proxy = "http://proxy.mycom.co.jp:8080/"  
> registry = "https://registry.npmjs.org/"
