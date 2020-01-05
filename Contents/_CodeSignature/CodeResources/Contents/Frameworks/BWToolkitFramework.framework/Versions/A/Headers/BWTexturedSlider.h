//
//  BWTexturedSlider.h
//  BWToolkit
//
//  Created by Brandon Walkin (www.brandonwalkin.com)
//  All code is provided under the New BSD license.
//

#import <Cocoa/Cocoa.h>

@interface BWTexturedSlider : NSSlider
{
	int trackHeight, indicatorIndex;
	NSRect sliderCellRect;
	NSButton *minButton, *maxButton;
}

@property int indicatorIndex;
@property (strong) NSButton *minButton;
@property (strong) NSButton *maxButton;

- (int)trackHeight;
- (void)setTrackHeight:(int)newTrackHeight;

@end
