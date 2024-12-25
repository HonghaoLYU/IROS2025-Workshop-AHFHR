Tips: You can get a better experience of this site in [Google chrome](https://www.google.com/chrome) browser.

# IROS2025 Workshop
## Advanced Haptic Technologies for Healthcare Robots

<!-- <p align='center'>
<img src="https://honghaolyu.github.io/intercontinental-teleoperation/assets/images/teleop-dualarm.gif" width="400" height="240" alt="demo of dualarm teleop"/>
<img src="https://honghaolyu.github.io/intercontinental-teleoperation/assets/images/teleop-grasp.gif" width="400" height="240" alt="demo of dualarm grasp"/>
</p> -->

#### Citation:
This work has been submmited to [The 16th International Conference on Intelligent Robotics and Applications](https://icira2023.org/).

<!-- ```
@ARTICLE{9693932,  
        author={Lv, Honghao and Kong, Depeng and Pang, Gaoyang and Wang, Baicun and Yu, Zhangwei and Pang, Zhibo and Yang, Geng},  
        journal={IEEE Transactions on Medical Robotics and Bionics},   
        title={GuLiM: A Hybrid Motion Mapping Technique for Teleoperation of Medical Assistive Robot in Combating the COVID-19 Pandemic},   
        year={2022},  
        volume={4},  
        number={1},  
        pages={106-117},  
        doi={10.1109/TMRB.2022.3146621}
}
``` -->

#### Abstract:
We present a novel cloud-based human-robot motion mapping framework for ultra-remote teleoperation. An intuitive dual-arm human-robot motion mapping framework based on capturing human motion has been implemented, and a private network connectivity is established using the Google cloud platform for efficient transfer of control data required for human-robot motion mapping. To demonstrate the feasibility of the proposed approach, an intercontinental teleoperation system between China and Sweden was developed, and a series of practical applications were demonstrated by capturing the motion of operator in Sweden <svg t="1684725599547" class="icon" viewBox="0 0 1433 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6578" width="20" height="20"><path d="M0 0m119.354623 0l1014.514291 0q119.354623 0 119.354622 119.354623l0 656.450423q0 119.354623-119.354622 119.354623l-1014.514291 0q-119.354623 0-119.354623-119.354623l0-656.450423q0-119.354623 119.354623-119.354623Z" fill="#0F5D9F" p-id="6579"></path><path d="M358.063868 59.677311h179.031933v298.386557h656.450424v179.031933H537.095801v298.386557H358.063868v-298.386557H59.677311v-179.031933h298.386557z" fill="#FDDA3D" p-id="6580"></path></svg> to control the dual-arm robot located over 7800KM away in China <svg t="1684725633143" class="icon" viewBox="0 0 1365 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="9464" width="20" height="20"><path d="M0 0m157.190104 0l943.140625 0q157.190104 0 157.190104 157.190104l0 628.760416q0 157.190104-157.190104 157.190105l-943.140625 0q-157.190104 0-157.190104-157.190105l0-628.760416q0-157.190104 157.190104-157.190104Z" fill="#F93939" p-id="9465"></path><path d="M1137.741973 0H119.778859C53.601825 0 0 56.274057 0 125.752083v691.636458c0 69.478026 53.601825 125.752083 119.778859 125.752084h1017.963114c66.177034 0 119.778859-56.274057 119.77886-125.752084V125.752083c0-69.478026-53.601825-125.752083-119.77886-125.752083z" fill="#F93939" p-id="9466"></path><path d="M329.234673 454.593781l-88.026458 48.571742 16.740746-102.959518-71.128522-72.857613 98.401005-14.93306 44.013229-93.685302 44.013229 93.685302L471.570312 327.348392l-71.285712 72.936208 16.897936 102.880923-87.947863-48.571742zM538.926272 188.628125h59.88943v62.876042h-59.88943v-62.876042zM598.894297 314.380208h59.889429v62.876042h-59.889429V314.380208z m0 125.752083h59.889429v62.876042h-59.889429v-62.876042z m-59.88943 125.752084h59.88943V628.760416h-59.88943v-62.876041z" fill="#FFDA2C" p-id="9467"></path></svg>.

<p align='center'>
<img src="assets\images\overview.jpg" width="1000" height="600" alt="Intercontinental Teleoperation"/>
</p>

#### Contact: 
[Honghao Lv](http://fsie-zju.com/team/) (lvhonghao [at] zju.edu.cn)

<!-- # Setup
<p align='center'>
<img src="https://honghaolyu.github.io/intercontinental-teleoperation/assets/images/setup.png" width="800" height="600" alt="setup of the grasp task"/>
</p> -->

# Demonstration between China and Sweden:
# Task1:
## Workpiece insertion

### The robotic left arm and the right arm in China are controlled by the operator in Sweden to finish the insertion assembly task.

<table align='center'>
<tr>
<td align='center' valign="middle"> <video src="assets\media\zip\workpiece insertion_view2.mp4" type="video/mp4" controls="controls" width="500" height="282"> 您的浏览器不支持播放该视频！</video> </td>
<td align='center' valign="middle"> <video src="assets\media\zip\workpiece insertion_view1.mp4" type="video/mp4" controls="controls" width="500" height="282"> 您的浏览器不支持播放该视频！</video> </td>
</tr>
<tr>
<td align='center'> View 1 (GoPro View in Sweden) </td>
<td align='center'> View 2 (Screen Recording View) </td>
</tr>
</table>

# Task2:
## Auscultation

### The robotic hand with the Doppler Ultrasound Stethoscope in China are controlled by the operator in Sweden to finish the remote auscultation task.

<table align='center'>
<tr>
<td align='center' valign="middle"> <video src="assets\media\zip\auscultation_view2.mp4" type="video/mp4" controls="controls" width="500" height="282"> 您的浏览器不支持播放该视频！</video> </td>
<td align='center' valign="middle"> <video src="assets\media\zip\auscultation_view1.mp4" type="video/mp4" controls="controls" width="500" height="282"> 您的浏览器不支持播放该视频！</video> </td>
</tr>
<tr>
<td align='center'> View 1 (GoPro View in Sweden) </td>
<td align='center'> View 2 (Screen Recording View) </td>
</tr>
</table>

# Task3:
## Vibration feedback
### The operator in Sweden can feel the vibration states, thereby gaining insight into the on-site robot’s motion and collision conditions.

<table>
<tr>
<!-- <td align='center' valign="middle"> <video src="https://honghaolyu.github.io/GuLiM-motion-transfer/assets/media/zip/degree30-P1 (2)_batch.mp4" type="video/mp4" controls="controls" width="500" height="282"> 您的浏览器不支持播放该视频！</video> </td> -->
<td align='center' valign="middle"> <video src="assets\media\zip\vibration feedback.mp4" type="video/mp4" controls="controls" width="500" height="282"> 您的浏览器不支持播放该视频！</video> </td>
</tr>
<tr>
<!-- <td align='center'> DMM </td> -->
<td align='center'> View (Screen Recording View) </td>
</tr>
</table>