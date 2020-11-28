#pragma once
#include "MainPage.g.h"
#include <winrt/Microsoft.ReactNative.h>


namespace winrt::yaz::implementation
{
    struct MainPage : MainPageT<MainPage>
    {
        MainPage();
    };
}

namespace winrt::yaz::factory_implementation
{
    struct MainPage : MainPageT<MainPage, implementation::MainPage>
    {
    };
}


